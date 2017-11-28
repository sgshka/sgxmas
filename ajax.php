<?php
    $request_body = file_get_contents('php://input');
    $solutionProposal = json_decode($request_body,true);

    $text = 
        "Denkt Euch ich hab das Christkind gesehen,\r\n".
        "ich hab’s überfahren, es war ein Versehen -\r\n".
        "Ich hatte gerade die Äugelein zu\r\n".
        "und träumte beim Fahren in himmlischer Ruh.\r\n\r\n".
        "Das Christkind hatte in dieser Nacht\r\n".
        "Bekanntschaft mit meinem Kühler gemacht.\r\n".
        "Später sah ich dann den Weihnachtsmann,\r\n".
        "er feuerte grad sein Rentier an.\r\n\r\n".
        "Ich überholte den langsamen Wicht,\r\n".
        "doch sah ich den Gegenverkehr dabei nicht.\r\n".
        "Ich wich grad noch aus, doch leider nicht Santa,\r\n".
        "ein kurzes Rumsen - er klebte am Manta.\r\n\r\n".
        "Am Ende sah ich noch den Nikolaus,\r\n".
        "er stürmte von rechts aus dem Freudenhaus.\r\n".
        "Er kam ganz hektisch über die Kreuzung gelaufen\r\n".
        "um sich am Automaten neue Präser zu kaufen.\r\n\r\n".
        "Mein Auto und mich hat er wohl nicht gesehen,\r\n".
        "jedenfalls blieben nur seine Stiefel stehen.\r\n".
        "So ist die Moral von dem Gedicht:\r\n".
        "Fahr zu schnell dein Auto nicht!!!\r\n\r\n".
        "Denn als ich zu Haus war, da musste ich heulen:\r\n".
        "Mein schöner Wagen, der hatte drei Beulen,\r\n".
        "Vom Nikolaus, vom Christkind und vom Weihnachtsmann -\r\n".
        "nächstes Jahr fahr ich mit der Straßenbahn!";

    $solution = array(
        "c1224" => " ",
        "c1223" => "n",
        "c1222" => "f",
        "c1221" => "h",
        "c1220" => "a",
        "c1219" => "i",
        "c1218" => "s",
        "c1217" => "r",
        "c1216" => "t",
        "c1215" => "c",
        "c1214" => "d",
        "c1213" => "u",
        "c1212" => "m",
        "c1211" => "l",
        "c1210" => "o",
        "c1209" => "g",
        "c1208" => "k",
        "c1207" => "b",
        "c1206" => "ü",
        "c1205" => "w",
        "c1204" => "v",
        "c1203" => "z",
        "c1202" => "ä",
        "c1201" => "e"
    );



    $emptyProposal=false;
    $newText="";
    $export=array();
    mb_internal_encoding('UTF-8');
    for($i=0; $i<mb_strlen($text);$i++) {
//        echo "mb_sub: ".$text[$i]."-".mb_substr($text,$i,1,"utf-8")."<br>";
        $currChar=mb_substr($text,$i,1);
        if ( $currChar===mb_strtolower($currChar) ) {
            $keyLow=array_search(mb_strtolower($currChar),$solution);
            $keyUp=false;
        } else {
            $keyLow=false;
            $keyUp=array_search(mb_strtolower($currChar),$solution);
        }

        if ($keyLow !== false) {
            $newText .= mb_strtolower($solutionProposal[$keyLow]) ;
        } elseif ($keyUp !== false) {
            $newText .= mb_strtoupper($solutionProposal[$keyUp]);
        } else {
            $newText .=$currChar;
        }
        $export[$i] =$newText;
    }
    echo json_encode(array('text' => $newText));
?>