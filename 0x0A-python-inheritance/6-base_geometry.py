#!/usr/bin/python3
"""Geometry module.
Author: Kanneh

"""


class BaseGeometry:
    """An empty class"""
    pass
azii@192 0x0A-python-inheritance % cat 6-base_geometry.py 
#!/usr/bin/python3
""" Improve Geometry.
Author: Kanneh

"""


class BaseGeometry:
    """An empty class"""

    def area(self):
        """Raises an exception because...
        area is not implemented

        """
        raise Exception("area() is not implemented")
