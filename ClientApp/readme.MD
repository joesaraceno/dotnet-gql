# Build container:
```
cd ClientApp
docker build -t carvedrock_front .
```
#  Run container in detached mode
```
docker run -d -p 3001:3000 carvedrock_front
```

