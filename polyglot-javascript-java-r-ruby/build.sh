#!/usr/bin/env bash
set -ex

$GRAALVM_HOME/bin/npm install
gcc -O3 random_sum.c -o random_sum
