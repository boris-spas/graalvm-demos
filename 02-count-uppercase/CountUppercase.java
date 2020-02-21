public class CountUppercase {
    public static void main(String[] args) {
        String sentence = String.join(" ", args);
        long total = 0;
	    final long start = System.currentTimeMillis();
	    long last = start;

        for (int i = 1; i < 10_000_000; i++) {
            total += sentence.chars().filter(Character::isUpperCase).count();
            if (i % 1_000_000 == 0) {
                long now = System.currentTimeMillis();
                System.out.printf("%d (%d ms)%n", i / 1_000_000, now - last);
                last = now;
            }
        }
        System.out.printf("total: %d (%d ms)%n", total, System.currentTimeMillis() - start);
    }
}
