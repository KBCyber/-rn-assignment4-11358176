# Jobizz

## Overview

Jobizz is a job application mobile app built using React Native. Users can log in, search for jobs, and view featured and popular job listings.
The app features a simple and clean user interface, and allows users to log in using their name and email or via social media accounts.

## Components

### LoginScreen

- **Purpose:** This component allows users to log in to the app. It includes fields for the user's name and email, as well as options to log in using social media accounts.
- **Key Elements:**
  - `TextInput` fields for name and email.
  - `TouchableOpacity` for the login button.
  - Social media login buttons with icons.

### HomeScreen

- **Purpose:** The main screen of the app that displays featured and popular job listings.
- **Key Elements:**
  - User profile display with image and red notification dot.
  - Search bar for job searching.
  - Lists of featured and popular jobs using `FlatList` and custom `View` components.

### FeaturedJobCard

- **Purpose:** Displays individual featured job details.
- **Props:**
  - `job`: An object containing job details like title, company, salary, location, image, and background color.

### PopularJobCard

- **Purpose:** Displays individual popular job details.
- **Props:**
  - `job`: An object containing job details like title, company, salary, location, and logo.

## Screenshots

### Login Screen

![Login Screen](path/to/login_screen_screenshot.png)

### Home Screen

![Home Screen](../components/images/image.png)

## Installation and Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/jobizz.git
   cd jobizz
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Link assets:**
   ```bash
   npx react-native-asset
   ```

4. **Run the app:**
   ```bash
   npx react-native run-android # for Android
   npx react-native run-ios # for iOS
   ```

## Dependencies

- React Native
- React Navigation
- Other dependencies specified in `package.json`

## Notes

- Make sure you have an Android or iOS emulator running, or a physical device connected to your development machine.
- Ensure all required assets (images) are placed correctly in the `assets/images` directory.

## Contribution

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
