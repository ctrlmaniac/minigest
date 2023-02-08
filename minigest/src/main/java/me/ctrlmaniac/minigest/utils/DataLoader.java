package me.ctrlmaniac.minigest.utils;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.opencsv.CSVReader;

import lombok.extern.slf4j.Slf4j;
import me.ctrlmaniac.minigest.entities.docfisc.TipoDocFisc;

@Slf4j
@Component
public class DataLoader {

	public List<TipoDocFisc> loadTipoDocFisc(String source) {
		List<TipoDocFisc> list = new ArrayList<>();

		InputStream in = getClass().getClassLoader().getResourceAsStream(source);

		try {
			CSVReader reader = new CSVReader(new InputStreamReader(in));

			String[] values = null;

			while ((values = reader.readNext()) != null) {
				list.add(new TipoDocFisc(values[0].trim(), values[1].trim()));
			}
		} catch (IOException e) {
			log.error(e.getMessage());
		}

		return list;
	}

}
