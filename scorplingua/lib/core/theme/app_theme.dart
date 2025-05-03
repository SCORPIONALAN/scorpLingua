import 'package:flutter/material.dart';

class AppTheme {
  static final ThemeData lightTheme = ThemeData(
    brightness: Brightness.light,
    primaryColor: const Color.fromARGB(255, 127, 25, 210),
    scaffoldBackgroundColor: const Color(0xFFF5F5F5),
    fontFamily: 'Raleway',
    colorScheme: ColorScheme(
      brightness: Brightness.light,
      primary: _AppColors.blue,
      onPrimary: Colors.white,
      secondary: _AppColors.orange,
      onSecondary: Colors.white,
      surface: Colors.white,
      onSurface: _AppColors.gray,
      error: Colors.red,
      onError: Colors.white,
    ),
    appBarTheme: AppBarTheme(
      backgroundColor: _AppColors.blue,
      foregroundColor: Colors.white,
      elevation: 0,
    ),
    floatingActionButtonTheme: FloatingActionButtonThemeData(
      backgroundColor: _AppColors.orange,
      foregroundColor: Colors.white,
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: _AppColors.orange,
        foregroundColor: Colors.white,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(12),
        ),
        textStyle: const TextStyle(fontWeight: FontWeight.bold),
      ),
    ),
    textTheme: TextTheme(
      headlineLarge: TextStyle(
          color: _AppColors.gray, fontSize: 32, fontWeight: FontWeight.bold),
      titleMedium: TextStyle(color: _AppColors.gray, fontSize: 20),
      bodyMedium: const TextStyle(color: Color(0xFF4F4F4F), fontSize: 16),
      labelLarge:
          TextStyle(color: _AppColors.gold, fontWeight: FontWeight.w600),
    ),
  );
  static final ThemeData darkTheme = ThemeData(
    brightness: Brightness.dark,
    primaryColor: _AppColors.blue,
    scaffoldBackgroundColor: const Color(0xFF121212),
    fontFamily: 'Raleway',
    colorScheme: ColorScheme(
      brightness: Brightness.dark,
      primary: _AppColors.blue,
      onPrimary: Colors.white,
      secondary: _AppColors.orange,
      onSecondary: Colors.black,
      surface: const Color(0xFF1E1E1E),
      onSurface: Colors.white,
      error: Colors.red,
      onError: Colors.white,
    ),
    appBarTheme: AppBarTheme(
      backgroundColor: _AppColors.blue,
      foregroundColor: Colors.white,
      elevation: 0,
    ),
    floatingActionButtonTheme: FloatingActionButtonThemeData(
      backgroundColor: _AppColors.orange,
      foregroundColor: Colors.white,
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: _AppColors.orange,
        foregroundColor: Colors.white,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(12),
        ),
        textStyle: const TextStyle(fontWeight: FontWeight.bold),
      ),
    ),
    textTheme: TextTheme(
      headlineLarge: TextStyle(color: Colors.white, fontSize: 32),
      titleMedium: TextStyle(color: Colors.white70, fontSize: 20),
      bodyMedium: const TextStyle(color: Colors.white70, fontSize: 16),
      labelLarge:
          TextStyle(color: _AppColors.gold, fontWeight: FontWeight.w600),
    ),
  );
}

class _AppColors {
  static const Color gray = Color(0xFF2E2E2E);
  static const Color orange = Color(0xFFFF6F00);
  static const Color blue = Color.fromARGB(255, 127, 25, 210);
  static const Color gold = Color(0xFFFFC107);
}
