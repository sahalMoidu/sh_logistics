from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in sh_logistics/__init__.py
from sh_logistics import __version__ as version

setup(
	name="sh_logistics",
	version=version,
	description="For Logistics Management",
	author="softwarehut",
	author_email="sahal@softwarehut.io",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
