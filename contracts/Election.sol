// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;
pragma solidity >=0.7.6;

// import "@openzeppelin/contracts/security/Pausable.sol";
import "@opengsn/contracts/src/BaseRelayRecipient.sol";

contract Election is BaseRelayRecipient{

    string public override versionRecipient = "2.2.0";
    address public owner;

    struct Citoyen {
        bool aVote;
        uint256 vote;
        bool autorise;
    }

    struct Candidat {
        uint256 num;
        string nom;
        uint256 nbrVotes;
    }

    uint256 public totalVotes;

    mapping(address => Citoyen) public citoyens;
    mapping(uint256 => Candidat) public candidats;
    uint256 public nbrCandidats;

    uint256 public dateDebut;
    uint256 public dateFin;

    constructor(address forwarder_) {
        trustedForwarder = forwarder_;
        owner = _msgSender();
        dateDebut = 1624289019; //21/06/2021 a 17h23 (test)
        dateFin = block.timestamp + 100000000; //test
        ajoutCandidat("Emmanuel Macron");
        ajoutCandidat("Marine Le Pen");
    }

    function donnerDroitDeVote(address _personne) external {
        require(
            _msgSender() == owner,
            "seul le proprietaire peut autoriser qqn a voter"
        );
        citoyens[_personne].autorise = true;
    }

    function voter(uint256 _bulletinNum) external {
        require(block.timestamp >= dateDebut);
        require(block.timestamp < dateFin);
        require(
            citoyens[_msgSender()].autorise,
            "pas le droit de vote"
        );
        require(
            !citoyens[_msgSender()].aVote,
            "a deja vote"
        );

        candidats[_bulletinNum].nbrVotes++;
        totalVotes++;

        citoyens[_msgSender()].vote = _bulletinNum;
        citoyens[_msgSender()].aVote = true;
    }

    function ajoutCandidat(string memory _nom) internal {
        nbrCandidats++;
        candidats[nbrCandidats] = Candidat(nbrCandidats, _nom, 0);
    }

    // function end() external whenNotPaused {
    //     require(
    //         _msgSender() == owner,
    //         "seul le proprietaire peut terminer l election"
    //     );
    //     require(
    //         block.timestamp > dateFin,
    //         "peut pas arreter vote tant que periode electorale pas finie"
    //     );
    //     _pause();
    // }

    // function _msgSender() internal view override(Context, BaseRelayRecipient)
    //     returns (address payable sender) {
    //     sender = BaseRelayRecipient._msgSender();
    // }

    // function _msgData() internal view override(Context, BaseRelayRecipient)
    //     returns (bytes memory) {
    //     return BaseRelayRecipient._msgData();
    // }
}
