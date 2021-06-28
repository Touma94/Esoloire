// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/security/Pausable.sol";

contract Election is Pausable {

    address public owner;
    
    struct Citoyen {
        bool aVote;
        uint vote;
        bool autorise;
    }

    struct Candidat {
        uint num;
        string nom;
        uint nbrVotes;
    }

    uint public totalVotes;
    
    mapping (address => Citoyen) public citoyens;
    mapping (uint => Candidat) public candidats;
    uint public nbrCandidats;

    uint public dateDebut;
    uint public dateFin;

    constructor () {
        owner = msg.sender;

        dateDebut = 1624289019; //21/06/2021 a 17h23 (test)
        dateFin = block.timestamp + 40; //5 sec apres le deploiement (test)

        ajoutCandidat('Emmanuel Macron');
        ajoutCandidat('Marine Le Pen');
    }

    function donnerDroitDeVote(address _personne) whenNotPaused external {
        require(msg.sender == owner, 'seul le proprietaire peut autoriser qqn a voter');
        citoyens[_personne].autorise = true;
    }

    function voter(uint _bulletinNum) whenNotPaused external {
        require(block.timestamp >= dateDebut);
        require(block.timestamp < dateFin);
        require(citoyens[msg.sender].autorise, 'pas le droit de vote');
        require(!citoyens[msg.sender].aVote, 'a deja vote');

        candidats[_bulletinNum].nbrVotes ++;
        totalVotes ++;

        citoyens[msg.sender].vote = _bulletinNum;
        citoyens[msg.sender].aVote = true;
    }

    function ajoutCandidat(string memory _nom) internal {
        nbrCandidats++;
        candidats[nbrCandidats] = Candidat(nbrCandidats, _nom, 0);
    }
    
    function end() whenNotPaused external{
        require(msg.sender == owner, 'seul le proprietaire peut terminer l election');
        require(block.timestamp > dateFin, 'peut pas arreter vote tant que periode electorale pas finie');
        _pause();
    }
}
