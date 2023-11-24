#!/bin/bash

# This script prevents commits directly to the main branch

current_branch=$(git rev-parse --abbrev-ref HEAD)

if [ "$current_branch" == "main" ]; then
    echo "ERROR: Direct commits to the main branch are not allowed."
    exit 1
fi
