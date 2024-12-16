from .serializer import NoteSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Note
from rest_framework import status

# Create your views here.

# crud -> create, read, update, delte

# create
@api_view(['POST'])
def CreateNoteView(request):
    serializer = NoteSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# read
@api_view(['GET'])
def NoteView(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

# read 
@api_view(['GET'])
def NoteDetail(request, id):
    note = Note.objects.filter(id=id).first()

    if note:
        serializer = NoteSerializer(note)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)


# update 
@api_view(['PATCH'])
def updateNoteView(request, id):
    note = Note.objects.filter(id=id).first()

    if Note:
        serializer = NoteSerializer(note, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    else:
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)
    

# delete
@api_view(['DELETE'])
def deleteNoteView(request, id):
    note = Note.objects.filter(pk=id).first()
     
    if note:
            note.delete()
            return Response({"msg", "deleted successfully"}, status=status.HTTP_200_OK)
    else:
        return Response({"msg":"bad request"},  status=status.HTTP_400_BAD_REQUEST)
    


# auth
    







