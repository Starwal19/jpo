#!/bin/bash


############################
# Définition des variables #
############################

INPUT=""
WORDLIST=""
VERBOSE=0
OUTPUT=0

# Variables pour les couleurs. 

RED="\033[31m"
GREEN="\033[32m"
WHITE="\033[0m"
############################
# Définition des fonctions #
############################

function helpping(){
    echo """

Welcome to stegcrack, the software to crack passwords of a file who has been hidden informations with steghide.  

Options : 

        -h : help menu
        -o : to extract the embed file directly
        -v : to put on the verbose mode
        -i <File> : input file
        -w <File> : set the wordlist to use
    
    """
}

############################
# Définition des arguments #
############################

while getopts ":hovi:w:" option
do
case $option in

    h)
        helpping
        exit 0
    ;;
    o)
        OUTPUT=1
    ;;
    v)
    	VERBOSE=1
    ;;
    i)
        INPUT=$OPTARG
    ;;
    w)
        WORDLIST=$OPTARG
    ;;
    *)
        echo "Error (1) : Bad option "
        helpping 

        exit 1
    ;;
esac
done

################################
# Définition du main programme #
################################

# Verification of arguments

if [ -e $WORDLIST  ]
then
	echo "Wordlist validated"
else 
	echo "Error (2) : Wordlist file not define "
	exit 2

fi

if [ -e $INPUT ]
then
	echo "Image file validated" 
else
	echo "Error (3) :  file not define "
	exit 3
fi

# Cracking of the file

while read password 
do
    [ $VERBOSE -eq 1 ] && echo -e "Trying${RED} $password ${WHITE}as password."
    steghide info $INPUT -p $password &> /dev/null

    if [ $? -eq 0 ]
    then
        echo -e """
=======================================================================
One password is found for the ${INPUT} 's file: ${GREEN} ${password} ${WHITE}

"""
        [ $OUTPUT -eq 1 ] && steghide extract -sf $INPUT -p $password

        exit 0 
    fi

done < $WORDLIST

echo "No password found for the ${INPUT}'s file in the ${WORDLIST} wordlist."
exit 0


