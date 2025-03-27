# Meditation App 🧘‍♂️

A meditation and mindfulness app built with React Native and Expo, designed to help users practice meditation and improve their mental well-being.

<div style="display: flex; justify-content: space-around; margin: 20px 0;">
  <img src="./assets/home.jpg" alt="Home Screen" width="200" />
  <img src="./assets/meditate.jpg" alt="Meditation Screen" width="200" />
</div>

## Features

- 🎯 Guided Meditations
- 🌙 Sleep Stories
- 🎵 Ambient Sounds
- 📊 Progress Tracking
- 🔔 Daily Reminders
- 🌈 Beautiful UI with Dark/Light mode

## Tech Stack

- **Framework**: [Expo](https://expo.dev) with React Native
- **Navigation**: Expo Router (file-based routing)
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **State Management**: Zustand
- **Animations**: React Native Reanimated
- **Gestures**: React Native Gesture Handler
- **Icons**: Expo Vector Icons
- **Type Safety**: TypeScript

## Project Structure

```
src/
├── api/        # API integration and data fetching
├── app/        # Screens and navigation (Expo Router)
├── components/ # Reusable UI components
├── constants/  # App constants and configuration
├── lib/        # Utilities and shared logic
└── types/      # TypeScript type definitions
```

## Getting Started

1. **Prerequisites**

   - Node.js (v18 or newer)
   - pnpm (recommended) or npm
   - iOS Simulator or Android Emulator

2. **Installation**

   ```bash
   # Install dependencies
   pnpm install

   # Start the development server
   pnpm start
   ```

3. **Running on Devices**

   ```bash
   # iOS
   pnpm ios

   # Android
   pnpm android
   ```

## Development Commands

- `pnpm start` - Start the Expo development server
- `pnpm ios` - Start the app in iOS simulator
- `pnpm android` - Start the app in Android emulator
- `pnpm test` - Run tests
- `pnpm lint` - Run linter

## Environment Variables

Create a `.env.local` file in the root directory:

```env
API_URL=your_api_url
API_KEY=your_api_key
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
