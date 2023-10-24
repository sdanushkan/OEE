from rest_framework.decorators import api_view, permission_classes
from ..models import *
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from ..serializers import *
from rest_framework.response import Response

@api_view(['POST'])
def createRequest(request):
    data = request.data
    request = Request.objects.create(
        name=data['name'],
        email=data['email'],
        phoneNumber=data['phoneNumber'], 
        country=data['country'],
        europeCountry=data['europeCountry'],
        about=data['about']
    )

    serializer = RequestSerializer(request, many=False)
    return Response(serializer.data)