from rest_framework.decorators import api_view, permission_classes
from ..models import *
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from ..serializers import *
from rest_framework.response import Response

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createRequest(request):
    user = request.user
    data = request.data
    request = Request.objects.create(
        user=user,
        companyName=data['companyName'],
        email=data['email'],
        phoneNumber=data['phoneNumber'], 
        category=data['category'],
        subject=data['subject']
    )

    serializer = RequestSerializer(request, many=False)
    return Response(serializer.data)