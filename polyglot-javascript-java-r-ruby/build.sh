#!/usr/bin/env bash
set -ex

npm install
gcc -O3 random_sum.c -o random_sum
