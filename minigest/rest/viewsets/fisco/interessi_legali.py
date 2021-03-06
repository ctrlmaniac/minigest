from rest_framework import viewsets

from minigest.fisco.models import InteressiLegali as il
from minigest.rest.serializers import InteressiLegaliSerializer


class InteressiLegali(viewsets.ModelViewSet):
    queryset = il.objects.all()
    serializer_class = InteressiLegaliSerializer
