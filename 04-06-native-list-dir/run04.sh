#!/usr/bin/env bash
set -ex

$GRAALVM_HOME/bin/java ExtListDir
$GRAALVM_HOME/bin/java ExtListDir "'-- ' + name + ' -- ' + ((size > 500) ? size : 'Too small to care')"
$GRAALVM_HOME/bin/java ExtListDir "((size > 500) ? size + ' ' + name : '')"
