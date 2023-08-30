from django.urls import path
from . import views
urlpatterns=[
    path('',views.main,name='main'),
    path('view/',views.view,name='view'),
    path('<int:id>/delete/',views.delete,name='delete')
] 