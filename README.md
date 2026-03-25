# HDRKUK Feedback Form

A modern, responsive feedback collection application built with React, Vite, and styled-components. This application allows users to submit feedback with star ratings and comments for HDRKUK services.

## Features

- ⭐ **Star Rating System**: Interactive 5-star rating component with hover effects
- 📝 **Comment Submission**: Text area for detailed feedback
- ✅ **Form Validation**: Real-time validation ensuring all fields are completed
- 🎨 **Modern UI**: Clean, responsive design using styled-components
- 🔄 **Simulated API**: Realistic submission experience with success/failure states
- ⚡ **Fast Development**: Built with Vite for lightning-fast development and builds

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: styled-components
- **Language**: JavaScript with JSX
- **Development**: ESLint for code quality

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd HDRKUK_feedbackForm
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
src/
├── components/
│   ├── FeedbackForm.jsx    # Main feedback form component
│   └── StarRating.jsx      # Interactive star rating component
├── client/
│   └── submit.js           # API submission logic (simulated)
├── App.jsx                 # Main application component
├── main.jsx                # Application entry point
└── index.css               # Global styles
```

## Usage

1. **Rate the Service**: Click on the stars to select a rating from 1-5
2. **Add Comments**: Enter your feedback in the text area
3. **Submit**: Click the submit button (only enabled when form is valid)
4. **Feedback**: Receive confirmation of successful submission or error handling

## API Integration

The application currently uses a simulated API that randomly succeeds or fails to demonstrate real-world submission handling. To integrate with a real API:

1. Update the `submitApi` function in `src/client/submit.js`
2. Replace the `simulateApiCall` with actual HTTP requests
3. Handle authentication and error responses as needed

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary to HDRKUK.
