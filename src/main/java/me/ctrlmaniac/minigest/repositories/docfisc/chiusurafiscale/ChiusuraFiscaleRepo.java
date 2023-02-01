package me.ctrlmaniac.minigest.repositories.docfisc.chiusurafiscale;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import me.ctrlmaniac.minigest.entitities.Negozio;
import me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale.ChiusuraFiscale;

public interface ChiusuraFiscaleRepo extends JpaRepository<ChiusuraFiscale, String> {
	List<ChiusuraFiscale> findByNegozioOrderByDataAsc(Negozio negozio);

	List<ChiusuraFiscale> findTop7ByNegozioOrderByDataDesc(Negozio negozio);

	@Query("SELECT c FROM ChiusuraFiscale c WHERE c.negozio=:negozio AND YEAR(c.data)=:year AND MONTH(c.data)=:month ORDER BY c.data ASC")
	List<ChiusuraFiscale> findAllByNegozioByYearByMonth(@Param("negozio") Negozio negozio, @Param("year") String year,
			@Param("month") String month);

}
