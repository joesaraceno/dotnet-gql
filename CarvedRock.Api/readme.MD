# Build container:
```
cd CarvedRock.Api
docker build -t carvedrock_api .
```
# Run container
```
docker run -p 5050:80 carvedrock_api
```