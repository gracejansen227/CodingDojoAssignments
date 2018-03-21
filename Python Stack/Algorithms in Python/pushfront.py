def push_front(arr,val):
    for i in range(0,len(arr)):
        arr[i], arr[i+1] = arr[i+1], arr[i+2]
    arr[0] = val
    return arr
