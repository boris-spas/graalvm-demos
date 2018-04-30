#!/usr/bin/env bash
set -ex

time $GRAALVM_HOME/bin/java ListDir $1
time ./listdir $1

time $GRAALVM_HOME/bin/java ExtListDir "'-- ' + name + ' -- ' + ((size > 500) ? size : 'Too small to care')"
time ./extlistdir                      "'-- ' + name + ' -- ' + ((size > 500) ? size : 'Too small to care')"
