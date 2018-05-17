#include <math.h>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE 100000000

int main(int argc, char *argv[])
{
    double* data = malloc(sizeof(double) * SIZE);
    time_t t;
    srand((unsigned) time(&t));

    // Generate random numbers
    for (int i = 0; i < SIZE; i++) {
        data[i] = (double)rand() / (double) RAND_MAX;
    }

    // Sum them
    double sum = 0;
    for (int i = 0; i < SIZE; i++) {
        sum += data[i];
    }

    // raise to the power of 100? HOW!??!
    sum = pow(sum, 100.0);

    // Print result
    printf("%lf", sum);
    return 0;
}
