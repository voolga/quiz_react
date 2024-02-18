<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Quiz Master README</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .section { margin-bottom: 20px; }
        h1, h2 { color: #333; }
        .feature { background-color: #f8f8f8; padding: 10px; border-left: 5px solid #007bff; margin-bottom: 10px; }
        .feature:last-child { margin-bottom: 0; }
    </style>
</head>
<body>
    <h1>Welcome to Quiz Master</h1>
    <p>An engaging quiz application suitable for both desktop and mobile screens, providing a seamless quiz experience without the need for user authorization.</p>

    <div class="section">
        <h2>Features</h2>
        <div class="feature">
            <h3>Welcome Screen</h3>
            <ul>
                <li>Number input for “number of questions” (limit 5 to 15).</li>
                <li>Select inputs for “category”, “difficulty”, “type”, and “time”.</li>
                <li>Buttons for “Start quiz” and “See my statistics”.</li>
            </ul>
        </div>
        <div class="feature">
            <h3>Main Quiz Screen</h3>
            <ul>
                <li>Displays question text with a progress bar.</li>
                <li>“End quiz” button and answer options.</li>
                <li>Timer element counting down from a specified value.</li>
            </ul>
        </div>
        <div class="feature">
            <h3>Quiz Result Screen</h3>
            <ul>
                <li>Shows a summary of the quiz results.</li>
                <li>Displays correct answers and quiz configuration details.</li>
                <li>“Restart” and “Choose another quiz” buttons for easy navigation.</li>
            </ul>
        </div>
        <div class="feature">
            <h3>Navigation</h3>
            <ul>
                <li>Seamless transition between different quiz stages.</li>
                <li>Modal window with “Cancel” and “Confirm” options on quiz end.</li>
                <li>Easy navigation to Statistics screen.</li>
            </ul>
        </div>
        <div class="feature">
            <h3>Adding Logic and State Management</h3>
            <ul>
                <li>Integration of Redux Toolkit for global state management.</li>
                <li>API requests for fetching quiz categories and questions.</li>
                <li>Dynamic quiz generation based on user selections.</li>
            </ul>
        </div>
    </div>
</body>
</html>
