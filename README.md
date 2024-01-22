# Plany

Plany is a small mobile application built with React Native and Expo.

## Overview

Plany is designed to provide users with calendar event tracking functionalities.

## Requirements

- Node version `20.3.1`
- [pnpm](https://pnpm.io/installation) version `8.14.0` or higher
- Android Studio or XCode to build and run the app on your device

## Setup

To get started with Plany, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Said-Alisic/Plany.git
   cd plany
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Run the application:**

   **iOS**

   ```bash
   pnpm run ios
   ```

   **Android**

   ```bash
   pnpm run android
   ```

💡 This will start the Expo server in your terminal. You can then run the app on an emulator or scan the QR code with the Expo Go app on your mobile device.

> ⚠️ You may need to open your emulator yourself if Expo doesn't do it automatically or it fails to run the first time before the emulator opens.

## Features

❗️Some features are missing business logic and only have dummy implementations ready.

### Sign In

https://github.com/Said-Alisic/Plany/assets/45482255/3af979ee-df6f-4ff9-bc96-b8b7858f70e6

[Sign In feature video](./docs/images/PlanySignInVideo.mov)

Signing in using email and password. Additionally, possible to sign in using a social provider such as Gmail.

### Sign Up

https://github.com/Said-Alisic/Plany/assets/45482255/355d54af-d50a-4d22-aa48-179930ca55c8

[Sign Up feature video](./docs/images/PlanySignUpVideo.mov)

Signing up using email and password. Additionally, possible to sign up using a social provider such as Gmail.

### Calendar

https://github.com/Said-Alisic/Plany/assets/45482255/08d96cfe-23e0-4a13-af7f-1dd315420880

[Calendar feature video](./docs/images/PlanyCalendarVideo.mov)

Checking events through a calendar. Creating new and deleting existing events in addition to displaying detailed event information for selected events.

### Settings

https://github.com/Said-Alisic/Plany/assets/45482255/71aaddd1-fd20-4c6e-86e8-a6e6fd3bc236

[Settings feature video](./docs/images/PlanyCalendarVideo.mov)

Adjusting application settings, such as language, dark or light mode, and enabling or disabling notifications.

## Upcoming features ✨

| Feature                                     |    Type     |     Status     |
| ------------------------------------------- | :---------: | :------------: |
| Authentication through API                  |  `feat` 🎸  | In progress 🟡 |
| Create new calendar event                   |  `feat` 🎸  | In progress 🟡 |
| Add participants to existing calendar event |  `feat` 🎸  |  Planning ⚪️   |
| Add component tests with Cypress            |  `test` 💍  |  Planning ⚪️   |
| Setup continuous integration tests workflow |   `ci` 🎡   |  Planning ⚪️   |
| Delete existing calendar event              |  `feat` 🎸  |  Planning ⚪️   |
| Remove calendar event participant(s)        |  `feat` 🎸  |  Planning ⚪️   |
| Beautified calendar events section          | `design` 💅 | In progress 🟡 |
| Access calendar event information           |  `feat` 🎸  |  Planning ⚪️   |
| Create custom app colour theme              | `design` 💅 |  Planning ⚪️   |

## License

Plany is open-source software licensed under the [MIT License](LICENSE).
