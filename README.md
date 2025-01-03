# Notebuddy

**Notebuddy** is a note-taking application designed to help users efficiently create, manage, and organize their notes. Built with a Django backend and a React frontend, Notebuddy offers a seamless and responsive user experience.

## Features

- **User Authentication**: Secure user registration and login functionality.
- **CRUD Operations**: Create, Read, Update, and Delete notes directly from the frontend.
- **Responsive Design**: Optimized for various devices, ensuring accessibility on desktops, tablets, and mobile phones.
- **About Page**: Provides information about the application and its purpose.

## Tech Stack

- **Backend**:
  - Django
  - Django REST Framework
- **Frontend**:
  - React
  - JavaScript
  - HTML/CSS

## Getting Started

### Prerequisites

- **Backend**:
  - Python 3.10+
  - Django 4.0+
- **Frontend**:
  - Node.js 16+
  - npm 8+

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Temesgendemeke/notebuddy.git
   cd notebuddy
   ```

2. **Backend Setup**:

   - Navigate to the server directory:

     ```bash
     cd server
     ```

   - Create a virtual environment and activate it:

     ```bash
     python -m venv venv
     source venv/bin/activate  # On Windows: venv\Scripts\activate
     ```

   - Install the required packages:

     ```bash
     pip install -r requirements.txt
     ```

   - Apply migrations:

     ```bash
     python manage.py migrate
     ```

   - Create a superuser for accessing the Django admin panel:

     ```bash
     python manage.py createsuperuser
     ```

   - Start the backend server:

     ```bash
     python manage.py runserver
     ```

3. **Frontend Setup**:

   - Navigate to the client directory:

     ```bash
     cd ../client
     ```

   - Install the required packages:

     ```bash
     npm install
     ```

   - Start the frontend development server:

     ```bash
     npm start
     ```

   - Access the application at `http://localhost:3000`.

## Usage

- **User Authentication**: Register a new account or log in with existing credentials.
- **Create Notes**: Use the "New Note" button to create a note.
- **Edit Notes**: Click on an existing note to edit its content.
- **Delete Notes**: Use the delete option to remove a note.
- **About Page**: Learn more about Notebuddy and its features.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please contact [Temesgen Demeke](https://github.com/Temesgendemeke).
