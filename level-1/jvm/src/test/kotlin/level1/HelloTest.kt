package level1

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class HelloTest {

    @Test
    fun `Dette er en latterlig enkel test`() {
        assertEquals(4, 2 + 2)
    }

}