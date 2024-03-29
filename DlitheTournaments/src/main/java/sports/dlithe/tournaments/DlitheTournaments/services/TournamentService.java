package sports.dlithe.tournaments.DlitheTournaments.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sports.dlithe.tournaments.DlitheTournaments.entity.Tournament;
import sports.dlithe.tournaments.DlitheTournaments.repository.TournamentRepository;

@Service
public class TournamentService {
	@Autowired
	TournamentRepository trepo;
	 
	public String newOne(Tournament tournament)
	{
		
	return	trepo.save(tournament).getName()+" has added as upcoming event";
		
	}
	
	public List<Tournament> fetchingAll()
	{
		return trepo.findAll();
	}
	public Tournament fetchingOnlyOne(Integer id)
	{
		return trepo.findById(id).orElse(new Tournament());
	}
	
	public String announce(Tournament tournament)
	{
		return trepo.save(tournament).getName()+" has updated";
	}
	
}
