# Build container:
```
cd ClientApp
docker build -t carvedrock_front .
```
# Run container in detached mode:
# forward traffic from port 3000 locally to 3001 inside the container
```
docker run -d -p 3001:3000 carvedrock_front
```

