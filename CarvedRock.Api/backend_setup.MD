# Build container:
```
cd CarvedRock.Api
docker build -t carvedrock_api .
```
# Run container:
# forward traffic from port 5050 locally to 5050 inside the container
```
docker run -p 5050:5050 carvedrock_api
```