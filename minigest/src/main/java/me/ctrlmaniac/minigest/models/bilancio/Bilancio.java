package me.ctrlmaniac.minigest.models.bilancio;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Bilancio {
	private BilancioMode entrate;
	private BilancioMode uscite;
}
