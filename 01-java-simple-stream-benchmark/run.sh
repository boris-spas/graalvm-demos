#!/usr/bin/env bash
set -xe

java -jar target/benchmarks.jar
$GRAALVM_HOME/bin/java -jar target/benchmarks.jar
