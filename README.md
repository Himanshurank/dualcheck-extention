# Dual Check: Zoho People & Basecamp Integration

<img src="images/icon.png" width="128" height="128" alt="Dual Check icon">

A simple VS Code extension that lets you check in/out of Zoho People and post status updates to Basecamp with a single click.

## What This Extension Does

- **Check in to work** with one click - updates both Zoho People and Basecamp
- **Check out at the end of the day** - updates both systems simultaneously
- **Save time** on your daily routine
- **Keep your team informed** automatically

## Quick Start Guide

### 1. Install the Extension

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "Dual Check"
4. Click Install

### 2. Set Up Your Credentials

You'll need:

- Zoho People OAuth token
- Your Zoho email address
- Basecamp access token
- Basecamp account, project, and message board IDs

### 3. Configure the Extension

1. Open Settings (File > Preferences > Settings)
2. Search for "zoho-basecamp"
3. Fill in your credentials
4. Customize your check-in/out messages if desired

### 4. Daily Usage

#### To Check In:

- Click the "Check In" button in the status bar (bottom left)
- You'll see a confirmation when successful

#### To Check Out:

- Click the "Check Out" button in the status bar
- You'll see a confirmation when successful

## Need Help?

### Getting Zoho OAuth Token

1. Go to [Zoho API Console](https://api-console.zoho.com/)
2. Create a new server application
3. Use the "Self Client" option
4. Select "ZohoPeople.attendance.ALL" scope
5. Copy the generated token

### Finding Basecamp IDs

- **Account ID**: The number after `basecamp.com/` in your URL
- **Project ID**: The number after `projects/` in your URL
- **Message Board ID**: The number after `message_boards/` in your URL

### Common Issues

- **Error messages**: Check that your API credentials are correct
- **Zoho token expired**: Tokens expire after some time - generate a new one
- **Can't find settings**: Search for "zoho-basecamp" in VS Code settings

## Privacy

This extension stores your API credentials only on your local machine and doesn't collect any data.
