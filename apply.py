#!/usr/bin/python

"""
    This script was created with the intention of applying the same changes from DEV to PROD

    NOTE!

    Use this command from your branch, then prepare a PR to main.
    Ensure that both members have seen the changes before merging.

    Script written by RJ.
"""

import os
import sys
import shutil

from distutils.dir_util import copy_tree

from_directory = "dev/"
to_directory   = "prod/"

shutil.rmtree("prod")

copy_tree(from_directory, to_directory)

print("---------------------------")
print("Apply complete! Prepare your branch to prepare to merge")