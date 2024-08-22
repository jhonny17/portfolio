#!/bin/bash

# Check if a parameter is passed
if [ -z "$1" ]; then
  echo "Error: No parameter provided."
  echo "Usage: ./scripts/decrypt-env-vars.sh <param>"
  exit 1
fi

PARAM=$1

# Validate the parameter
if [[ "$PARAM" != "development" && "$PARAM" != "staging" && "$PARAM" != "production" ]]; then
  echo "Error: Invalid parameter '$PARAM'."
  echo "Allowed values are 'development', 'staging', or 'production'."
  exit 1
fi

SOURCE_FILE=".env.${PARAM}"
DEST_FILE=".env.${PARAM}.local"

# Check if the source file exists
if [ ! -f "$SOURCE_FILE" ]; then
  echo "Error: '$SOURCE_FILE' does not exist."
  exit 1
fi

# Decrypt the source file
AWS_PROFILE="personal" sops --output $DEST_FILE --decrypt $SOURCE_FILE