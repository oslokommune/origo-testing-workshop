package level1

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

class FairytaleRepositoryTest {

    @Test
    fun `Verify name of Askeladden brothers`() {
        val repository = FairytaleRepository()
        val names = repository.fetchNameOfAskeladdenBrothers()

        assertTrue(names.contains("Per"))
        assertTrue(names.contains("Pål"))
        assertTrue(names.contains("Espen Askeladden"))
    }

}