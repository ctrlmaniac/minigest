package me.ctrlmaniac.minigest.repositories.docfisc.chiusurafiscale;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import me.ctrlmaniac.minigest.entities.docfisc.chiusurafiscale.ChiusuraFiscale;
import me.ctrlmaniac.minigest.entities.negozio.Negozio;

import java.time.LocalDate;
import java.util.List;

public interface ChiusuraFiscaleRepo extends JpaRepository<ChiusuraFiscale, String> {

	List<ChiusuraFiscale> findAllByNegozio(Negozio negozio);

	List<ChiusuraFiscale> findByNegozioOrderByDataAsc(Negozio negozio);

	List<ChiusuraFiscale> findTop7ByNegozioOrderByDataDesc(Negozio negozio);

	@Query("SELECT c FROM ChiusuraFiscale c WHERE c.negozio=:negozio AND c.data=:data")
	List<ChiusuraFiscale> findAllByNegozioByData(Negozio negozio, LocalDate data);

	@Query("SELECT c FROM ChiusuraFiscale c WHERE c.negozio=:negozio AND YEAR(c.data)=:year AND MONTH(c.data)=:month ORDER BY c.data ASC")
	List<ChiusuraFiscale> findAllByNegozioAndByYearAndByMonth(@Param("negozio") Negozio negozio,
			@Param("year") String year, @Param("month") String month);
}
