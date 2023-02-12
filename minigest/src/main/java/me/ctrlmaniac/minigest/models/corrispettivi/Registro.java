package me.ctrlmaniac.minigest.models.corrispettivi;

import java.util.HashSet;
import java.util.Set;
import java.util.List;
import java.util.ArrayList;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Registro {
	private Set<Double> aliquoteIVA = new HashSet<>();
	private List<Corrispettivo> corrispettivi = new ArrayList<>();
}
