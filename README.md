## fibonaccci-package

#### Prerequisites:
- docker installed.
- multipasss (optional).

This repositroy contains setup files for building a package for determining the fibonacci sequence of a particular number 
"n". In the script the number is set to 10000 by default.
But can be edited with any value and the workflow will automatically create a package for it.

### Pull the image
pull the image using:
```
docker pull ghcr.io/nkwenti-severian-ndongtsop/fibonacci-package
```
After the pulling you run an instance.

This instance will display the fiboacci number of n=100000

```
docker run -it --name container ghcr.io/nkwenti-severian-ndongtsop/fibonacci-package
```

This package was deploy from an image. The image was belt using a dockerfile
