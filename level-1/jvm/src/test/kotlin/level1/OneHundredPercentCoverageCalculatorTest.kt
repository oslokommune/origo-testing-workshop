package level1

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

class OneHundredPercentCoverageCalculatorTest {

    @Test
    fun `40 + 2 = 42`() {
        assertThat(OneHundredPercentCoverageCalculator.add(40, 2))
                .describedAs("40 + 2")
                .isEqualTo(42)
    }

}