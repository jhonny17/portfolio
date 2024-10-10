#!/bin/bash

# Function to check if a file exists
check_file_exists() {
  if [ ! -f "$1" ]; then
    echo "Error: '$1' does not exist."
    exit 1
  fi
}

# Function to display help
display_help() {
  echo "Usage: ./script.sh <encrypt | decrypt> <environment> [--help | -h]"
  echo ""
  echo "Commands:"
  echo "  encrypt      Encrypt the .env.<environment>.local file to .env.<environment>.encrypted"
  echo "  decrypt      Decrypt the .env.<environment>.encrypted file to .env.<environment>.local"
  echo ""
  echo "Flags:"
  echo "  --help, -h   Display this help message"
  echo ""
  echo "Environments:"
  echo "  development, test, staging, production"
  echo ""
  echo "Examples:"
  echo "  ./script.sh encrypt development"
  echo "  ./script.sh decrypt production"
}

# Check if --help or -h is passed in any parameter
for arg in "$@"; do
  if [[ "$arg" == "--help" || "$arg" == "-h" ]]; then
    display_help
    exit 0
  fi
done

# Check if at least two parameters are passed (excluding help)
if [ $# -lt 2 ]; then
  echo "Error: Insufficient parameters."
  display_help
  exit 1
fi

ACTION=$1
PARAM=$2

# Define an array of valid environments
VALID_ENVIRONMENTS=("development" "test" "staging" "production")

# Function to check if the parameter is valid
is_valid_environment() {
  for env in "${VALID_ENVIRONMENTS[@]}"; do
    if [[ "$1" == "$env" ]]; then
      return 0 # valid
    fi
  done
  return 1 # invalid
}

# Function to format and display allowed environments
display_allowed_environments() {
  local last_index=$((${#VALID_ENVIRONMENTS[@]} - 1)) # Get the index of the last element
  local last_env=${VALID_ENVIRONMENTS[$last_index]}    # The last environment
  local allowed_environments=$(printf ", %s" "${VALID_ENVIRONMENTS[@]:0:$last_index}")
  allowed_environments="${allowed_environments:2}, and ${last_env}"
  echo "Allowed environments are: ${allowed_environments}."
}

# Validate the action
if [[ "$ACTION" != "encrypt" && "$ACTION" != "decrypt" ]]; then
  echo "Error: Invalid action '$ACTION'."
  echo "Allowed actions are 'encrypt', 'decrypt', or '--help'."
  exit 1
fi

# Validate the parameter (environment)
if ! is_valid_environment "$PARAM"; then
  echo "Error: Invalid environment '$PARAM'."
  display_allowed_environments
  exit 1
fi

# Define file names based on the environment
if [ "$ACTION" == "encrypt" ]; then
  SOURCE_FILE=".env.${PARAM}.local"
  DEST_FILE=".env.${PARAM}.encrypted"
  
  # Check if the source file exists for encryption
  check_file_exists "$SOURCE_FILE"

  # Encrypt the file
  sops encrypt $SOURCE_FILE > $DEST_FILE
  echo "Encrypted '$SOURCE_FILE' to '$DEST_FILE'."
elif [ "$ACTION" == "decrypt" ]; then
  SOURCE_FILE=".env.${PARAM}.encrypted"
  DEST_FILE=".env.${PARAM}.local"
  
  # Check if the source file exists for decryption
  check_file_exists "$SOURCE_FILE"

  # Decrypt the file
  sops --output $DEST_FILE --decrypt $SOURCE_FILE
  echo "Decrypted '$SOURCE_FILE' to '$DEST_FILE'."
fi
