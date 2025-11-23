# Todos App 📝

A modern, cross-platform todo management application built with React Native, Expo, and Appwrite. Stay organized and productive with an intuitive interface for managing your tasks.

## Features

- 🔐 **User Authentication** - Secure login and registration with Appwrite
- 👤 **User Profile** - Manage your account information
- ✅ **Todo Management** - Create and organize your todos
- 📱 **Cross-Platform** - Works on iOS, Android, and Web
- 🎨 **Modern UI** - Beautiful interface built with NativeWind (Tailwind CSS)
- ⚡ **Fast & Responsive** - Built with Expo Router for optimal performance

## Tech Stack

- **Framework**: [Expo](https://expo.dev) (~54.0.25)
- **Language**: TypeScript
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/) (file-based routing)
- **Backend**: [Appwrite](https://appwrite.io) (Authentication & Database)
- **Styling**: [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native)
- **Icons**: [@expo/vector-icons](https://docs.expo.dev/guides/icons/)

## Prerequisites

Before you begin, ensure you have:

- Node.js (v18 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- An Appwrite project set up (see [Setup](#setup))

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd todos-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory with your Appwrite credentials:

   ```env
   EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=your-project-id
   ```

   > **Note**: Replace `your-project-id` with your actual Appwrite project ID.

4. **Configure Appwrite**

   - Create an Appwrite project at [cloud.appwrite.io](https://cloud.appwrite.io)
   - Enable Email/Password authentication
   - Register your platform identifiers:
     - iOS: `com.todosapp.ios`
     - Android: `com.todosapp.android`
     - Web: `com.todosapp.web`
   - Set up your database and collections for todos

## Running the App

1. **Start the development server**

   ```bash
   npx expo start
   ```

2. **Run on your preferred platform**

   - **iOS Simulator**: Press `i` or run `npm run ios`
   - **Android Emulator**: Press `a` or run `npm run android`
   - **Web**: Press `w` or run `npm run web`
   - **Expo Go**: Scan the QR code with the Expo Go app on your device

## Project Structure

```
todos-app/
├── app/                    # Expo Router pages (file-based routing)
│   ├── (auth)/            # Authentication routes
│   │   ├── login.tsx
│   │   └── register.tsx
│   ├── (dashboard)/       # Protected dashboard routes
│   │   ├── profile.tsx
│   │   └── todos/
│   │       ├── createTodo.tsx
│   │       └── todosList.tsx
│   ├── index.tsx          # Home page
│   └── _layout.tsx        # Root layout
├── components/            # Reusable components
│   ├── auth/             # Authentication components
│   ├── home/             # Home page components
│   └── ui/               # UI components (Button, Text, Card, etc.)
├── contexts/             # React contexts
│   └── UserContext.tsx   # User authentication context
├── hooks/                # Custom React hooks
│   └── useUser.ts        # User context hook
├── lib/                  # Utility libraries
│   └── appwrite.ts       # Appwrite client configuration
└── assets/               # Images and static assets
```

## Key Features Explained

### Authentication

The app uses Appwrite for secure user authentication. The `UserContext` manages:
- User login/logout
- Registration
- Session management
- Authentication state

### Protected Routes

- `Authenticated` component protects dashboard routes
- `NotAuthenticated` component protects auth routes
- Automatic redirects based on authentication state

### UI Components

Reusable components built with NativeWind:
- `AppButton` - Customizable button component
- `AppText` - Text component with styling
- `AppTextInput` - Input field with label
- `AppCard` - Card container
- `AppView` - View wrapper
- `AppLoader` - Loading indicator

## Scripts

- `npm start` - Start the Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run on web browser
- `npm run lint` - Run ESLint

## Development

The app uses:
- **File-based routing** with Expo Router
- **TypeScript** for type safety
- **NativeWind** for styling (Tailwind CSS)
- **Context API** for state management
- **Custom hooks** for reusable logic

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

For issues and questions:
- Check the [Expo documentation](https://docs.expo.dev/)
- Review [Appwrite documentation](https://appwrite.io/docs)
- Open an issue in the repository

---

Built with ❤️ using Expo and React Native
