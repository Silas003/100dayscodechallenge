from django.shortcuts import render
from django.http import HttpResponse
from .models import Counter

def main(request):
    if request.method=='POST':
        counter=request.POST['message']
        name=request.POST['name']
        if counter:
            counterModel=Counter(name=name,words=counter,counter=len(counter))
            counterModel.save()  
        return render(request,'home.html',{'counter':len(counter),'model':counterModel})
    
    return render(request,'home.html')
   

def view(request):
    model=Counter.objects.all()
    return render(request,'view.html',{"model":model})

def delete(request,id):
    id=Counter.objects.get(pk=id)
    id.delete()
    model=Counter.objects.all()
    return render(request,'view.html',{'model':model})
