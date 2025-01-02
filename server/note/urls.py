from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views


urlpatterns = [
    path("", views.NoteView, name="note"),
    path("create", views.CreateNoteView, name="create note"),
    path("<int:id>", views.NoteDetail, name="note detail"),
    path("<int:id>/update", views.updateNoteView, name="update note"),
    path("<int:id>/delete", views.deleteNoteView, name="delete note"),
    path("generate", views.generate_note, name="generate note")
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)