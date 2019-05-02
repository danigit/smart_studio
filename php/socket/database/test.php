<?php
/**
 * Created by IntelliJ IDEA.
 * User: surpa
 * Date: 27/12/18
 * Time: 17.19
 */

require_once 'connection.php';

class Test{
    private $conn;

    /**
     * Constructor that retrieve a new connection to the database
     */
    function __construct(){
        $this->conn = new Connection();
    }

    /**
     * Function that test the connection to the database
     * @param $function_name - the name of the function to be executed
     */
    function test_function($function_name){
        switch ($function_name) {
            case 'register': var_dump($this->conn->register('max', 'max'));
                break;
            case 'login': var_dump($this->conn->login('danis', 'dani'));
                break;
            case 'get_floor_image': var_dump($this->conn->get_floor_info('Ospedale Bolzano', 'floor 1'));
                break;
            case 'get_floors': var_dump($this->conn->get_floors('BOLZANO'));
                break;
            case 'get_anchors': var_dump($this->conn->get_anchors_by_floor('floor 1'));
                break;
            case 'change_password': var_dump($this->conn->change_password('da', 'dani'));
                break;
            case 'get_markers': var_dump($this->conn->get_markers('dani'));
                break;
            case 'insert_location': var_dump($this->conn->insert_location('1', 'Universita1', 'Uni1', '414', '110', 'image.png', 1));
                break;
            case 'get_tags_by_user': var_dump($this->conn->get_tags_by_user('dani'));
                break;
            case 'get_tags_by_floor': var_dump($this->conn->get_tags_by_floor(3));
                break;
            case 'change_floor_field': var_dump($this->conn->change_floor_field('3', 'spacing', '100'));
                break;
            case 'update_floor_image': var_dump($this->conn->update_floor_image('new_image.png', '3'));
                break;
            case 'delete_tag': var_dump($this->conn->delete_tag(15));
                break;
            case 'delete_anchor': var_dump($this->conn->delete_anchor(24));
                break;
            case 'insert_tag': var_dump($this->conn->insert_tag('newTag', 'BLUETOOTH_WiFi', ['SRPDNL88B24Z129W']));
                break;
            case 'insert_floor': var_dump($this->conn->insert_floor('newFloor', 'newFloorImage.png', 100, 10, 1));
                break;
            case 'insert_anchor': var_dump($this->conn->insert_anchor('newAnchor', 'DANIELMAC', 'ANCHOR_BLE', 1, 1, 1, [1, 2, 3, 4],"23344,342432,343423",  1));
                break;
            case 'change_anchor_field': var_dump($this->conn->change_anchor_field(1, 'name', 'Anchor100'));
                break;
            case 'update_anchor_position': var_dump($this->conn->update_anchor_position(17.555, 3.222, 1, "Piano 0 Siit"));
                break;
            default: var_dump('Funzione non esistente');
        }
    }
}

$test = new Test();
$test->test_function('update_anchor_position');