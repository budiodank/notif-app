<?php
  //require __DIR__ . '../../vendor.autoload.php';
  require __DIR__.'../vendor/autoload.php';

  $options = array(
    'cluster' => 'ap1',
    'useTLS' => true
  );
  $pusher = new Pusher\Pusher(
    '01fe9bda0d3c72bd646a',
    '74bd3cc17e64dedc8812',
    '857079',
    $options
  );

  $data['message'] = 'Wow! I am triggering a real-time message from my server!';
  $pusher->trigger('cordova', 'pusher-event', $data);
?>