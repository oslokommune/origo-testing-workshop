package level1

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

class AwesomeCalculatorTest {

    @Test
    fun `Verifies that arithmetic is not broken`() {
        val calculatedSum = AwesomeCalculator.add(2, 2)
        val expectedSum = 4

        assertEquals(expectedSum, calculatedSum)
    }

}