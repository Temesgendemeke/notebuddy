# Notebuddy

**Notebuddy** is a powerful and user-friendly note-taking app built with Django for the backend and React for the frontend. It supports  text customization, and photo uploads, providing a streamlined and customizable experience for users. Inspired by tools like Notion, Notebuddy aims to simplify organizing thoughts, tasks, and ideas in one place.

## Features

- **Text Customization**: Style your notes with bold, italics, underline, and other text formatting options.
- **Photo Uploads**: Add images to your notes for better visualization and context.
- **AI-Powered Note-Taking**: Leverage artificial intelligence to generate summaries, insights, and suggestions for your notes.
- **Responsive Design**: Access your notes seamlessly across desktop and mobile devices.
- **Secure Backend**: Powered by Django, ensuring data integrity and security.

## Tech Stack

### Backend:
- [Django](https://www.djangoproject.com/)
- [Django REST Framework (DRF)](https://www.django-rest-framework.org/)
- MySQL (or any preferred database)

### Frontend:
- [React](https://reactjs.org/)
- Tailwind CSS (for styling)

## Getting Started

### Prerequisites

- Python 3.10+
- Node.js 16+
- MySQL (or any configured database)
- Virtual environment manager (e.g., `venv` or `pipenv`)

### Setup Instructions

#### Backend
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/notebuddy.git
   cd notebuddy/server
   ```
2. Set up a virtual environment and activate it:
   ```bash
   python -m venv .venv
   source .venv/bin/activate
   ```
3. Install the requirements:
   ```bash
   pip install -r requirements.txt
   ```
4. Set up the `.env` file:
   ```env
   SECRET_KEY=your-secret-key
   DEBUG=True
   DATABASE_URL=mysql://user:password@localhost:3306/notebuddy
   ```
5. Apply migrations:
   ```bash
   python manage.py migrate
   ```
6. Run the development server:
   ```bash
   python manage.py runserver
   ```

#### Frontend
1. Navigate to the `client` folder:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Running Tests

#### Backend Tests
```bash
python manage.py test
```

#### Frontend Tests
```bash
npm test
```

## Project Structure

```plaintext
notebuddy/
├── server/       # Backend Django app
│   ├── account/  # User authentication and profile management
│   ├── notes/    # Note-related models, views, and APIs
│   ├── settings/ # Django settings
│   └── ...
├── frontend/     # Frontend React app
│   ├── src/      # React components and logic
│   ├── public/   # Static assets
│   └── ...
└── README.md     # Project documentation
```

## Contributing

We welcome contributions from the community! To get started:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- [Django Documentation](https://docs.djangoproject.com/)
- [React Documentation](https://reactjs.org/docs/)

---
