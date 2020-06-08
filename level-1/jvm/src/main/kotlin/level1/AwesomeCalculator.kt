package level1

object AwesomeCalculator : Calculator {

    override fun add(a: Int, b: Int): Int {
        var sum = 0;

        for (x in 1..a) {
            sum++
        }
        for (x in 1..b) {
            sum++
        }

        return sum;
    }

}