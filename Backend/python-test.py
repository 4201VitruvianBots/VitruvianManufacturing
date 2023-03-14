
# def image_to_string(path):
#     string_var = None
#     # Add some logic here that opens the image and saves it
#     # as a string, and saves it to "string_var". This is the same logic as
#     #  is shown in the guide above

#     return string_var


# def string_to_image(string):
#     image_var = None
#     # // Add some logic here that converts the string and converts it
#     # // back into an image, and saves it into "image_var". This should follow the
#     # // code in the guide linked above
#     return image_var

#img = Image.open(path)	
# On successful execution of this statement,
# an object of Image type is returned and stored in img variable)

from PIL import Image
filename = "image.png"
with Image.open(filename) as image:
	width, height = image.size
img.save(path, format)	
